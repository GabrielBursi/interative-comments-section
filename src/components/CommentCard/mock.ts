import { CommentCardProps } from "./types";

export const mockCommentCard: CommentCardProps[] = [
	{
		isOwn: true,
		mentionedUser: "user1",
		id: 1,
		content: "Lorem ipsum dolor sit amet.",
		createdAt: "2023-10-27T12:00:00Z",
		score: 15,
		user: {
			username: "user1",
		},
	},
	{
		isOwn: false,
		mentionedUser: "user2",
		id: 2,
		content: "Praesent commodo cursus magna.",
		createdAt: "2023-10-26T10:30:00Z",
		score: 20,
		user: {
			username: "user2",
		},
	},
	{
		isOwn: true,
		mentionedUser: "user3",
		id: 3,
		content: "Aenean eu leo quam.",
		createdAt: "2023-10-25T09:15:00Z",
		score: 12,
		user: {
			username: "user3",
		},
	},
	{
		isOwn: false,
		mentionedUser: "user4",
		id: 4,
		content: "Sed posuere consectetur est at lobortis.",
		createdAt: "2023-10-24T08:45:00Z",
		score: 18,
		user: {
			username: "user4",
		},
	},
	{
		isOwn: true,
		mentionedUser: "user5",
		id: 5,
		content: "Duis mollis, est non commodo luctus.",
		createdAt: "2023-10-23T14:20:00Z",
		score: 25,
		user: {
			username: "user5",
		},
	},
	{
		isOwn: false,
		mentionedUser: "user6",
		id: 6,
		content: "Maecenas sed diam eget risus varius blandit.",
		createdAt: "2023-10-22T13:10:00Z",
		score: 16,
		user: {
			username: "user6",
		},
	},
	{
		isOwn: true,
		mentionedUser: "user7",
		id: 7,
		content: "Nulla vitae elit libero, a pharetra augue.",
		createdAt: "2023-10-21T11:50:00Z",
		score: 22,
		user: {
			username: "user7",
		},
	},
	{
		isOwn: false,
		mentionedUser: "user8",
		id: 8,
		content: "Etiam porta sem malesuada magna mollis euismod.",
		createdAt: "2023-10-20T07:55:00Z",
		score: 19,
		user: {
			username: "user8",
		},
	},
	{
		isOwn: true,
		mentionedUser: "user9",
		id: 9,
		content: "Vestibulum id ligula porta felis euismod semper.",
		createdAt: "2023-10-19T15:40:00Z",
		score: 17,
		user: {
			username: "user9",
		},
	},
	{
		isOwn: false,
		mentionedUser: "user10",
		id: 10,
		content: "Fusce dapibus, tellus ac cursus commodo.",
		createdAt: "2023-10-18T12:25:00Z",
		score: 21,
		user: {
			username: "user10",
		},
	},
];
