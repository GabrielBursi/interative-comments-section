import { CommentCard, Container } from "@/components";

export default function Home() {
	return (
		<Container>
			<CommentCard content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ad? Id sapiente voluptatibus earum alias rem laudantium illo soluta exercitationem, pariatur aspernatur ea ratione. Dolor exercitationem repellat nam quos pariatur quaerat laboriosam doloremque dolorum soluta, atque dolores quibusdam quod voluptas, natus asperiores ipsam iusto hic quae unde? Dolore vel veniam veritatis velit distinctio est tempore ipsa beatae, porro quas dolores dignissimos perferendis tempora fugit ipsam non neque libero obcaecati saepe quaerat magni ab illum? Odio architecto expedita quidem aut tenetur deleniti. Quisquam, nostrum eveniet. Tempora recusandae molestiae minus vero excepturi cumque officiis dignissimos cum, voluptatibus reprehenderit corrupti rerum atque aperiam?' createdAt="1 week ago" score={4} user={{ username: 'blondehot' }}/>
		</Container>
	)
}
