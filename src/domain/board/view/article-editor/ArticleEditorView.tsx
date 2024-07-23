import MarkdownEditor from "../../../../common/markdown/MarkdownEditor"
import './css/article-editor.css'
import useArticleEditorViewModel from "../../viewmodel/ArticleEditorViewModel"
import CategoryTab from "./components/CategoryTab"

const ArticleEditorView = () => {
  const vm = useArticleEditorViewModel()

  return (
    <div className = 'ArticleEditorView'>
      <div className = 'TitleBar'>  
        <CategoryTab value = {vm.category} categories={vm.categories} onSelect={vm.onSelectCategory}/>
        {/* <input type='text' placeholder="Title" value={vm.article.title} onChange={(e) => vm.onChangeTitle(e.target.value)}/> */}
        <input type='text' ref={vm.titleRef} placeholder="Title" defaultValue={vm.article.title}/>
      </div>
      <div>
        <hr/>
      </div>
      <div>
        {/* <MarkdownEditor onChangeContents = {vm.onChangeContents} onUploadImage = {vm.onUploadImage} contents = {vm.article.contents}></MarkdownEditor> */}
        <MarkdownEditor editorRef={vm.editorRef} onUploadImage = {vm.onUploadImage}></MarkdownEditor>
      </div>
      <hr/>
      <div className = 'flexdiv'>
        <button className = 'submit' onClick = {(e)=>vm.onSubmit()}> SUBMIT </button>
      </div>
    </div>
  )
}

export default ArticleEditorView