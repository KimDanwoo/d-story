import type { Meta, StoryObj } from '@storybook/web-components'

import type { PageProps } from './Page'
import { Page } from './Page'
import * as HeaderStories from '../Header/Header.stories'

const meta = {
  title: 'Example/Page',
  render: (args: PageProps) => Page(args),
} satisfies Meta<PageProps>

export default meta
type Story = StoryObj<PageProps>

export const LoggedIn: Story = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
}

export const LoggedOut: Story = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
}
