/// <reference types="react-scripts" />

declare namespace NodeJS{
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test'
		readonly REACT_APP_API_HOST_URL : string
		readonly REACT_APP_API_ARTICLE : string
		readonly REACT_APP_API_CATEGORY : string
		readonly REACT_APP_API_ARTICLE_DETAIL : string
		readonly REACT_APP_OAUTH2_AUTH : string
		readonly REACT_APP_API_IMAGE : string
		readonly REACT_APP_JWT_AUTH : string
		readonly REACT_APP_JWT_AUTH_REFRESH : string
		readonly REACT_APP_TOKEN_REFRESH_KEY : string
		readonly REACT_APP_IMAGE_URL : string
		readonly REACT_APP_MEDIA_URL : string
		readonly REACT_APP_CV_FILE_NAME : string
		readonly REACT_APP_GITHUB_URL : string
		readonly REACT_APP_LINKEDIN_URL : string
		readonly REACT_APP_OAUTH2_GOOGLE_URI : string
		readonly REACT_APP_OAUTH2_GITHUB_URI : string
		readonly REACT_APP_OAUTH2_GITHUB_CALLBACK_URI : string
		readonly REACT_APP_OAUTH2_REDIRECT_URI : string
	}
}
