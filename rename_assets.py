from pathlib import Path
import re
import unicodedata

ASSETS = Path("src/assets")

# --------------------------------------------------
# 1. STANDARD FOLDER NAMES
# --------------------------------------------------

FOLDER_RENAMES = {
    "DigiNorth": "diginorth",
    "Diginorth": "diginorth",
    "diginorth": "diginorth",

    "Digivolt": "digivolt",
    "DigiVolt": "digivolt",
    "digivolt": "digivolt",

    "EmergingTech": "emerging-tech",
    "Emergingtech": "emerging-tech",
    "emergingtech": "emerging-tech",
    "emerging-tech": "emerging-tech",

    "Pos": "erp-pos",
    "POS": "erp-pos",
    "pos": "erp-pos",
    "ERP": "erp-pos",
    "erp": "erp-pos",
    "erp-pos": "erp-pos",

    "SkyGrid": "skygrid",
    "Skygrid": "skygrid",
    "skygrid": "skygrid",
}


# --------------------------------------------------
# 2. PRODUCT PREFIXES
# --------------------------------------------------

PREFIXES = {
    "skygrid": "skygrid",
    "digivolt": "digivolt",
    "erp-pos": "erp-pos",
    "diginorth": "diginorth",
    "emerging-tech": "emerging-tech",
}


IMAGE_EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".avif",
    ".gif",
    ".svg",
}


# --------------------------------------------------
# 3. CLEAN A FILENAME
# --------------------------------------------------

def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)

    text = text.replace("_", "-")
    text = text.replace(" ", "-")

    text = text.lower()

    # Keep only letters, numbers and hyphens
    text = re.sub(r"[^a-z0-9-]+", "-", text)

    # Remove repeated hyphens
    text = re.sub(r"-+", "-", text)

    return text.strip("-")


# --------------------------------------------------
# 4. FIND A SAFE NON-DUPLICATE NAME
# --------------------------------------------------

def safe_destination(path: Path) -> Path:
    if not path.exists():
        return path

    stem = path.stem
    suffix = path.suffix

    number = 2

    while True:
        candidate = path.with_name(f"{stem}-{number}{suffix}")

        if not candidate.exists():
            return candidate

        number += 1


# --------------------------------------------------
# 5. RENAME PRODUCT FOLDERS
# --------------------------------------------------

def rename_folders():
    print("\n=== RENAMING PRODUCT FOLDERS ===\n")

    if not ASSETS.exists():
        raise SystemExit(
            f"ERROR: {ASSETS} does not exist.\n"
            "Run this script from the Digi02_website project root."
        )

    for old_name, new_name in FOLDER_RENAMES.items():
        old_path = ASSETS / old_name
        new_path = ASSETS / new_name

        if not old_path.exists():
            continue

        # Already correct
        if old_path == new_path:
            continue

        if new_path.exists():
            print(
                f"SKIP folder: {old_path} -> {new_path} "
                "(destination already exists)"
            )
            continue

        print(f"FOLDER: {old_path} -> {new_path}")
        old_path.rename(new_path)


# --------------------------------------------------
# 6. RENAME IMAGE FILES
# --------------------------------------------------

def rename_images():
    print("\n=== RENAMING IMAGE FILES ===\n")

    for folder_name, prefix in PREFIXES.items():
        folder = ASSETS / folder_name

        if not folder.exists():
            print(f"SKIP: {folder} does not exist")
            continue

        for file in list(folder.iterdir()):
            if not file.is_file():
                continue

            extension = file.suffix.lower()

            if extension not in IMAGE_EXTENSIONS:
                continue

            clean_stem = slugify(file.stem)

            if not clean_stem:
                clean_stem = "asset"

            # Prefix with product name unless already prefixed
            if not clean_stem.startswith(prefix):
                clean_stem = f"{prefix}-{clean_stem}"

            new_name = f"{clean_stem}{extension}"

            destination = file.with_name(new_name)

            # Nothing to do
            if file.name == new_name:
                print(f"OK:   {file}")
                continue

            destination = safe_destination(destination)

            print(f"FILE: {file.name}")
            print(f"   -> {destination.name}")

            file.rename(destination)


# --------------------------------------------------
# 7. SHOW FINAL STRUCTURE
# --------------------------------------------------

def show_results():
    print("\n=== FINAL ASSET STRUCTURE ===\n")

    for path in sorted(ASSETS.rglob("*")):
        relative = path.relative_to(ASSETS)

        if path.is_dir():
            print(f"[DIR]  {relative}/")
        else:
            print(f"       {relative}")


# --------------------------------------------------
# RUN
# --------------------------------------------------

if __name__ == "__main__":
    rename_folders()
    rename_images()
    show_results()

    print("\nDONE.")
    print("Your Digi02 asset folders and filenames have been normalized.")
