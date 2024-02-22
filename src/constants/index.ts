export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type SIZE = (typeof SIZES)[number]
