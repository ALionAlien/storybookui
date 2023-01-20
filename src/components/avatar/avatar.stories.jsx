import { Avatar } from "./avatar";

export default {
    title: "Design System/Avatar",
    component: Avatar,
    parameters: {
        componentSubtitle: "An image element for representing people or organizations.",
    },
};

export function Basic() {
    return (
        <Avatar
            src="http://storybook.bfmio.com/static/media/chungus.c2e5cc0f.jpg"
            alt="Big Chungus"
            bg="green"
            size={340}
            circle={true}
        />
    );
}

export function BasicFallback() {
    return <Avatar src="" alt="" bg="orange" size={340} circle={false} />;
}

export function Group() {
    return (
        <Avatar.Group>
            <Avatar
                src="http://storybook.bfmio.com/static/media/chungus.c2e5cc0f.jpg"
                alt="Big Chungus"
                bg="green"
                size={340}
                circle={true}
            />
            <Avatar
                src="http://storybook.bfmio.com/static/media/chungus.c2e5cc0f.jpg"
                alt="Big Chungus"
                bg="green"
                size={340}
                circle={true}
            />

            <Avatar
                src="http://storybook.bfmio.com/static/media/chungus.c2e5cc0f.jpg"
                alt="Big Chungus"
                bg="green"
                size={340}
                circle={true}
            />
            <Avatar
                src="http://storybook.bfmio.com/static/media/chungus.c2e5cc0f.jpg"
                alt="Big Chungus"
                bg="green"
                size={340}
                circle={true}
            />
        </Avatar.Group>
    );
}
