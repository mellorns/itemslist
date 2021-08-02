export type sizeType = {
    width: number,
    height: number
}

export type commentsType = {
    id: number,
    productId: number,
    description: string,
    date: string
}


export type itemType = {
    id: number,
    imageUrl: string,
    name: string,
    count: number,
    size: sizeType,
    weight: number,
    comments: Array<commentsType>,
    description: string,
    collar: string
}