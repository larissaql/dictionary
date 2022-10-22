import axios, { AxiosInstance } from "axios";
import Words from "../models/Words";

export default class DictionaryService {
    private _http: AxiosInstance
    private _endpoint: string

    private _words: Words[]

    constructor() {
        const urlApi = import.meta.env.VITE_API_URL
        this._http = axios.create({
            baseURL: urlApi
        })

        this._endpoint = import.meta.env.VITE_DICTIONARY_ENDEPOINT

        this._words = []
    }


    async loadWords(filter: string): Promise<Words[]> {
        const response = await this._http(this._endpoint + '/' + filter)
        if(response.status == 200){
            const { data } = response
            console.log(data)
            this._words = data.map((obj: any) => new Words(obj))

        }
        return this._words
    }

    filterWords(filter: string) {
        const sanitizedFilter = filter.trim().toLowerCase()
    
        if (!sanitizedFilter) {
          return this._words
        }
    
        return this._words.filter((w) => {
          return (
            w.name.toLowerCase().includes(sanitizedFilter) ||
            w.defition.toLowerCase().includes(sanitizedFilter)
          )
        })
      }
}