import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from ".";
import { Container } from '..';

const meta: Meta<typeof CommentCard> ={
    title: 'CommentCard',
    component: CommentCard,
	args: {
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum cumque architecto sequi, autem accusamus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor reprehenderit nesciunt eos libero repellat consectetur illum temporibus mollitia sapiente.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum cumque architecto sequi, autem accusamus?Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		createdAt: "2023-10-27T12:00:00Z",
		score: 10,
		user: {
			username: 'blondehot'
		},
		id: 1
	},
	argTypes: {
		createdAt: {
			control: 'date'
		}
	},
	parameters: {
		layout: 'fullscreen',
		backgrounds: { default: 'dark' },
	},
	render: (args) => (
		<Container>
			<CommentCard {...args}/>
		</Container>
	)
}
export default meta

type Story = StoryObj<typeof CommentCard>;

export const Basic: Story = {
    args: {

    }
}

export const IsOwn: Story = {
	args: {
		isOwn: true
	}
}

export const WithMentionedUser: Story = {
	args: {
		mentionedUser: 'BlondeHot'
	}
}

export const WithReplies: Story = {
	args: {
		quantityOfReplies: 2
	}
}

export const WithAllProps: Story = {
	args: {
		quantityOfReplies: 2,
		mentionedUser: 'BlondeHot',
		isOwn: true,
	}
}