export type TransformationChapterId = 'connect' | 'automate' | 'transact'

export type TransformationChapter = {
  headline: string
  id: TransformationChapterId
  label: string
  support: string
}

export const transformationChapters: readonly TransformationChapter[] = [
  {
    id: 'connect',
    label: '01 / Connect',
    headline: "Systems shouldn't work in isolation.",
    support:
      'Bring the information and tools behind everyday operations into the same working context.',
  },
  {
    id: 'automate',
    label: '02 / Automate',
    headline: 'Remove the handoffs that slow work down.',
    support:
      'Turn repeated manual steps into workflows that move without constant intervention.',
  },
  {
    id: 'transact',
    label: '03 / Transact',
    headline: 'Keep every transaction connected to the operation behind it.',
    support: 'Process activity with the records, approvals and reporting that need to follow.',
  },
]
