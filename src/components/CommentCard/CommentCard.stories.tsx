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

export const WithFullLines: Story = {
	args: {
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, et ratione ipsa est reprehenderit veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias ipsam ullam qui quibusdam similique, cupiditate distinctio voluptatum illum id. Eaque error nulla quos magni cum nesciunt, maxime quo ipsam molestiae provident saepe tenetur placeat autem cumque! Veniam, laboriosam expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel consequatur accusamus hic qui ducimus error doloremque animi dignissimos voluptatibus quo iusto, nam unde molestias officia incidunt! Suscipit, ad fugiat? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus est, dicta nihil illo voluptates distinctio officiis reprehenderit recusandae? Obcaecati culpa provident veritatis esse rem ratione cumque perferendis cupiditate, delectus, omnis vel laborum, fuga dolorem consequuntur ipsum. Corrupti, expedita suscipit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum debitis consequatur hic a itaque totam tempora illum possimus asperiores molestiae? Exercitationem odio beatae aut, quam earum ab debitis aliquam quidem porro neque molestias doloribus nulla tempora eos nam tempore veritatis.',
	}
}

export const WithReplies: Story = {
	args: {
		quantityOfReplies: 2
	}
}
