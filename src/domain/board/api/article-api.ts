import axiosCustom from "../../../common/api/axios-custom";
import { CursorList } from "../../../common/api/schema/pagination";
import { ArticleDto} from "../dto/ArticleDto";
import { Article } from "../model/Article";
import { CreateArticleRequest, CreateArticleResponse } from "./dto/article-request-dto";

const env = process.env

export async function getArticlesByUrl(url: string): Promise<CursorList<ArticleDto>> {
    try {
        const response = await axiosCustom.get(url)
        return response.data
    } catch(error) {
        throw error        
    }
}

export async function getCategoryArticles(categoryId: number|null, cursorId: string|null, size: number): Promise<CursorList<ArticleDto>>{
    // console.log("[article-api]::getCategoryArticles called. category ID : " + categoryId)
    try {
        const queries: any = {
            size: size
        }
        
        if (categoryId !== null) {
            queries.categoryId = categoryId
        }
        
        if (cursorId !== null) {
            queries.cursor = cursorId
        }
        // console.log("queries : ", queries)
        const response = await axiosCustom.get(env.REACT_APP_API_ARTICLE, {params: queries})
        return response.data
    }catch(error) {
        throw error
    }
}

export async function getArticle(id: string): Promise<ArticleDto> {
    try {
        const url = env.REACT_APP_API_ARTICLE_DETAIL+id 
        const response = await axiosCustom.get(url)
        const data = response.data
        return data
    }catch(error){
        throw error
    }
}

export async function createArticle(title: string, content: string, categoryId: number): Promise<CreateArticleResponse> {
    try{
        const request: CreateArticleRequest = {
            title: title,
            content: content,
            categoryId: categoryId
        }
        const response = await axiosCustom.post(env.REACT_APP_API_ARTICLE_COMMAND, request)
        return response.data
       }catch(error){
        throw error
    }
}

export async function modifyArticle(article: Article): Promise<void> {
    try {
        const vo: CreateArticleRequest = {
            title: article.title,
            content: article.contents,
            categoryId: article.category.id
        }
        const url = env.REACT_APP_API_ARTICLE_COMMAND + "/" + article.id
        const response = await axiosCustom.put(url, vo)
    }catch(error) {
        throw error
    }
}

export async function deleteArticle(id: string) {
    try {
        const url = env.REACT_APP_API_ARTICLE_COMMAND + "/" + id
        return await axiosCustom.delete(url)
    }catch(error) {
        throw error
    }
}