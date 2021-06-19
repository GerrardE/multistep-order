interface IItems {
    src: string | any,
    altText: string,
    caption: string,
    header: string,
    key: string,
}

interface IProps {
    config: {
        carouselItems: Array<IItems>
    }
}

export default IProps;
