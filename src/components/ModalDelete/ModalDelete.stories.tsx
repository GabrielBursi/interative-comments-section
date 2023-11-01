import type { Meta, StoryObj } from '@storybook/react';
import { ModalDelete } from ".";

const meta: Meta<typeof ModalDelete> ={
    title: 'ModalDelete',
    component: ModalDelete,
    args: {
		isOpen: true,
		onClose: () => '',
		onConfirm: () => '',
	},
	argTypes: {
		onClose: {
			type: 'symbol'
		},
		onConfirm: {
			type: 'symbol'
		}
	}
}
export default meta

type Story = StoryObj<typeof ModalDelete>;

export const Basic: Story = {
    args: {

    }
}
