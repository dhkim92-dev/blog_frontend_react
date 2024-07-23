import MarkdownViewer from "../../../../common/markdown/MarkdownViewer";
import './css/article-viewer.css'
import useArticleViewerViewModel from "../../viewmodel/ArticleViewerViewModel";
import TitleSection from "./components/TitleSection";



const ArticleViewer : React.FC = () => {
  const vm = useArticleViewerViewModel()

  return (
    <>
      <div className = 'ArticleViewer' style = {{marginTop: '100px'}}>
        <TitleSection article={vm.article}
          onEdit={vm.onClickEditButton}
          onDelete={vm.onClickDeleteButton}
        />
      </div>
      <div>
        <div>
        {/* <div className = 'toastui-editor-contents'> */}
          { vm.article ? <MarkdownViewer contents = {vm.article?.contents!}/> : null }
        </div>
      </div>
    </>
  )
}

export default ArticleViewer

  