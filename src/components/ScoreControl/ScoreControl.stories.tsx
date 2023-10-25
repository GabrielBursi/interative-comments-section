import type { Meta, StoryObj } from '@storybook/react';
import { ScoreControl } from ".";

const meta: Meta<typeof ScoreControl> ={
    title: 'ScoreControl',
    component: ScoreControl,
	args: {
		score: 2
	},
	render: (args) => (
		<div style={{ width: '250px', height: '180px', padding: "2.4rem" }}>
			<ScoreControl {...args}/>
		</div>
	)
}
export default meta

type Story = StoryObj<typeof ScoreControl>;

export const Basic: Story = {
    args: {

    }
}
