import type { Meta, StoryObj } from '@storybook/react';
import { CreateCommentCard } from ".";
import { Container } from '..';

const meta: Meta<typeof CreateCommentCard> ={
    title: 'CreateCommentCard',
    component: CreateCommentCard,
	args: {

	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: { default: 'dark' },
	},
	render: (args) => (
		<Container>
			<CreateCommentCard {...args} />
		</Container>
	)
}
export default meta

type Story = StoryObj<typeof CreateCommentCard>;

export const Basic: Story = {
    args: {

    }
}
