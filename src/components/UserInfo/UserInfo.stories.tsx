import type { Meta, StoryObj } from '@storybook/react';
import { UserInfo } from ".";
import { Container } from '..';
import Avatar from '../../../public/images/avatars/image-amyrobson.png'

const meta: Meta<typeof UserInfo> ={
    title: 'UserInfo',
    component: UserInfo,
	args: {
		createdAt: "2023-10-25T09:15:00Z",
		user: {
			username: 'blondehot',
		},
		id: 1,
		onEdit: () => ''
	},
	argTypes: {
		onEdit: {
			type: 'symbol'
		},
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
			<div style={{ backgroundColor: 'white' }}>
				<UserInfo {...args}/>
			</div>
		</Container>
	)
}
export default meta

type Story = StoryObj<typeof UserInfo>;

export const Basic: Story = {
    args: {

    }
}

export const IsOwn: Story = {
	args: {
		isOwn: true
	}
}

export const WithAvatar: Story = {
	args: {
		user: {
			username: 'blodehot',
			avatar: Avatar.src
		}
	}
}
