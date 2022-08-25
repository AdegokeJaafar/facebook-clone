/* eslint-disable react/jsx-key */
import StoryCard from "../components/StoryCard";


const stories = [
    {
        name: "Jaafar Adegoke",
        src: "https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo",
        profile: "https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo",
    },
    {
        name: "Adeyemi",
        src: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/250970202_4539607949488461_2486864755508108149_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH20CuoZUsjPwCgo98Sxmc9CzQNS_J_3WsLNA1L8n_da1kHnodGQWjdWWSa81ZMi5GVDcCqMWGjhBBZ2QB1tK3q&_nc_ohc=c0QH9M1O58YAX8l0X8s&_nc_ht=scontent-los2-1.xx&oh=00_AT_qZM104rLfn-eK50MOpbHVTuPYyI6zYGwC6CUZ-kKA9Q&oe=630A4982",
        profile: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/250970202_4539607949488461_2486864755508108149_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH20CuoZUsjPwCgo98Sxmc9CzQNS_J_3WsLNA1L8n_da1kHnodGQWjdWWSa81ZMi5GVDcCqMWGjhBBZ2QB1tK3q&_nc_ohc=c0QH9M1O58YAX8l0X8s&_nc_ht=scontent-los2-1.xx&oh=00_AT_qZM104rLfn-eK50MOpbHVTuPYyI6zYGwC6CUZ-kKA9Q&oe=630A4982",
    },
    {
        name: "Femi ",
        src: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/173545224_4228390563943536_5017911367866304328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG8L90ZKsFd4te0R5evOaXtogZOEsPa57GiBk4Sw9rnsX-50TueNQdMX3NpxufzOe7noTimyjsuc6LLdvQxoZBT&_nc_ohc=SEwbxBpyj6kAX8Wxrqd&_nc_ht=scontent-los2-1.xx&oh=00_AT_iE0xBgHxqqQ_5brAQim-DipLVxY4PLt84QCRQDPi1Sw&oe=630A5D1C",
        profile: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/173545224_4228390563943536_5017911367866304328_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG8L90ZKsFd4te0R5evOaXtogZOEsPa57GiBk4Sw9rnsX-50TueNQdMX3NpxufzOe7noTimyjsuc6LLdvQxoZBT&_nc_ohc=SEwbxBpyj6kAX8Wxrqd&_nc_ht=scontent-los2-1.xx&oh=00_AT_iE0xBgHxqqQ_5brAQim-DipLVxY4PLt84QCRQDPi1Sw&oe=630A5D1C",
    },
    {
        name: "Wale",
        src: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/134866875_3671117019670896_8242102750565278966_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHBqMCDXnqBT2pQVSFtu30sxA7W9HoBFbzEDtb0egEVvCy5NF6l226NmI5JTlRHuuzx4JNr34cg96Ea7ZAuRvf5&_nc_ohc=zb7_66VyFvYAX9qbkOy&_nc_ht=scontent-los2-1.xx&oh=00_AT99csrMcZZCaiuMDYpR6_tX8lTBMCLTOT-etukPTH9cyg&oe=632BAEDA",
        profile: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/134866875_3671117019670896_8242102750565278966_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHBqMCDXnqBT2pQVSFtu30sxA7W9HoBFbzEDtb0egEVvCy5NF6l226NmI5JTlRHuuzx4JNr34cg96Ea7ZAuRvf5&_nc_ohc=zb7_66VyFvYAX9qbkOy&_nc_ht=scontent-los2-1.xx&oh=00_AT99csrMcZZCaiuMDYpR6_tX8lTBMCLTOT-etukPTH9cyg&oe=632BAEDA",
    },
    {
        name: "Coker",
        src: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/61516342_2276174032498542_9091558829115572224_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeH3hzgwj1JW1gcGh_Wsv7la6EhMOm-ESQLoSEw6b4RJAkGs4QVlGMhva7h2_AZfUkfsXFemTJmNnp9swHd3Oyxw&_nc_ohc=vuYPZd6ZOkYAX_vbu50&tn=ciYqbLk0moO9rG9N&_nc_ht=scontent-los2-1.xx&oh=00_AT-jvOwmbY1aBMbSziqOUJoOutrVqyqptVdFRqn3KM6fww&oe=6328AAFC",
        profile: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/61516342_2276174032498542_9091558829115572224_n.jpg?stp=dst-jpg_s552x414&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeH3hzgwj1JW1gcGh_Wsv7la6EhMOm-ESQLoSEw6b4RJAkGs4QVlGMhva7h2_AZfUkfsXFemTJmNnp9swHd3Oyxw&_nc_ohc=vuYPZd6ZOkYAX_vbu50&tn=ciYqbLk0moO9rG9N&_nc_ht=scontent-los2-1.xx&oh=00_AT-jvOwmbY1aBMbSziqOUJoOutrVqyqptVdFRqn3KM6fww&oe=6328AAFC",
    },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard 
                key={story.src}
                name={story.name} 
                src={story.src} 
                profile={story.profile} 
            />
        ))}
    </div>
  );
}

export default Stories;