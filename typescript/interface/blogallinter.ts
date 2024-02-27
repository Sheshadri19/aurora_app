export interface Rootblogall {
    status: number
    data: Daum[]
    totalPageCount: number
    totalCount: number
    currentPage: number
    currentLimit: number
    message: string
  }
  
  export interface Daum {
    _id: string
    title: string
    description: string
    image: string
    author: string
    related_blogs: string[]
    status: string
    isDeleted: boolean
    createdAt: string
  }
  