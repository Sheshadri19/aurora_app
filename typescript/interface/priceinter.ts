export interface priceinterroot {
    status: number
    data: PriceDaum[]
    message: string
  }
  
  export interface PriceDaum {
    _id: string
    title: string
    monthly_amount: string
    monthlyNumericField: number
    yearly_amount: string
    monthly_add_inspectors_amount: string
    yearly_add_inspectors_amount: string
    features: Feature[]
    status: string
    isDeleted: boolean
    createdAt: string
  }
  
  export interface Feature {
    _id: string
    pricing_id: string
    feature_name: string
    isEnabled: boolean
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }
  