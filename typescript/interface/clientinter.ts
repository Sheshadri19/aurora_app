export interface Rootclient {
    status: number
    data: Daum[]
    message: string
  }
  
  export interface Daum {
    _id: string
    name: string
    image: string
    description: string
    rating: number
    status: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  