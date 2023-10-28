import { Comment } from "@/types";

export const mockCommentCard: Comment[] = [
	{
		isOwn: true,
		id: 1,
		content: "Lorem ipsum dolor sit amet.",
		createdAt: "2023-10-27T12:00:00Z",
		score: 15,
		user: {
			username: "user1",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user1",
				id: 2,
				content: "Lorem ipsum dolor sit amet.",
				createdAt: "2023-10-27T12:00:00Z",
				score: 15,
				user: {
					username: "randomUser1",
				},
			}
		]
	},
	{
		isOwn: false,
		id: 3,
		content: "Praesent commodo cursus magna.",
		createdAt: "2023-10-26T10:30:00Z",
		score: 20,
		user: {
			username: "user2",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user2",
				id: 4,
				content: "Praesent commodo cursus magna.",
				createdAt: "2023-10-26T10:30:00Z",
				score: 20,
				user: {
					username: "randomUser2",
				},
			}
		]
	},
	{
		isOwn: true,
		id: 5,
		content: "Aenean eu leo quam.",
		createdAt: "2023-10-25T09:15:00Z",
		score: 12,
		user: {
			username: "user3",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user3",
				id: 6,
				content: "Aenean eu leo quam.",
				createdAt: "2023-10-25T09:15:00Z",
				score: 12,
				user: {
					username: "randomUser3",
				},
			}
		]
	},
	{
		isOwn: true,
		id: 7,
		content: "Sed posuere consectetur est at lobortis.",
		createdAt: "2023-10-24T08:45:00Z",
		score: 18,
		user: {
			username: "user4",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user4",
				id: 8,
				content: "Sed posuere consectetur est at lobortis.",
				createdAt: "2023-10-24T08:45:00Z",
				score: 18,
				user: {
					username: "randomUser4",
				},
			}
		]
	},
	{
		isOwn: true,
		id: 9,
		content: "Duis mollis, est non commodo luctus.",
		createdAt: "2023-10-23T14:20:00Z",
		score: 25,
		user: {
			username: "user5",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user5",
				id: 10,
				content: "Duis mollis, est non commodo luctus.",
				createdAt: "2023-10-23T14:20:00Z",
				score: 25,
				user: {
					username: "randomUser5",
				},
			}
		]
	},
	{
		isOwn: false,
		id: 11,
		content: "Maecenas sed diam eget risus varius blandit.",
		createdAt: "2023-10-22T13:10:00Z",
		score: 16,
		user: {
			username: "user6",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user6",
				id: 12,
				content: "Maecenas sed diam eget risus varius blandit.",
				createdAt: "2023-10-22T13:10:00Z",
				score: 16,
				user: {
					username: "randomUser6",
				},
			}
		]
	},
	{
		isOwn: true,
		id: 13,
		content: "Nulla vitae elit libero, a pharetra augue.",
		createdAt: "2023-10-21T11:50:00Z",
		score: 22,
		user: {
			username: "user7",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user7",
				id: 14,
				content: "Nulla vitae elit libero, a pharetra augue.",
				createdAt: "2023-10-21T11:50:00Z",
				score: 22,
				user: {
					username: "randomUser7",
				},
			}
		]
	},
	{
		isOwn: false,
		id: 15,
		content: "Etiam porta sem malesuada magna mollis euismod.",
		createdAt: "2023-10-20T07:55:00Z",
		score: 19,
		user: {
			username: "user8",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user8",
				id: 16,
				content: "Etiam porta sem malesuada magna mollis euismod.",
				createdAt: "2023-10-20T07:55:00Z",
				score: 19,
				user: {
					username: "randomUser8",
				},
			}
		]
	},
	{
		isOwn: true,
		id: 17,
		content: "Vestibulum id ligula porta felis euismod semper.",
		createdAt: "2023-10-19T15:40:00Z",
		score: 17,
		user: {
			username: "user9",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user9",
				id: 18,
				content: "Vestibulum id ligula porta felis euismod semper.",
				createdAt: "2023-10-19T15:40:00Z",
				score: 17,
				user: {
					username: "randomUser9",
				},
			}
		]
	},
	{
		isOwn: false,
		id: 19,
		content: "Fusce dapibus, tellus ac cursus commodo.",
		createdAt: "2023-10-18T12:25:00Z",
		score: 21,
		user: {
			username: "user10",
		},
		replies: [
			{
				isOwn: false,
				replyingTo: "user10",
				id: 20,
				content: "Fusce dapibus, tellus ac cursus commodo.",
				createdAt: "2023-10-18T12:25:00Z",
				score: 21,
				user: {
					username: "randomUser10",
				},
			}
		]
	},
];
