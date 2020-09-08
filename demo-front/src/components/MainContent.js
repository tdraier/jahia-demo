import React ,  { useState }from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArticleListComp from './ArticleListComp';
import ArticleController from '../controllers/ArticleController';
import Article from '../model/Article';

const styleHelper = require('../styles/StylesHelper.js');

function addArticle(title, editor, content) {
  console.log('add article action')
  new ArticleController().create(
    new Article(null, title, content, editor)
  )
}

function cancel() {
  console.log('cancel action')
}

function MainContent() {
    const classes = styleHelper.mainStyle();
    const [title, setTitle] = useState('');
    const [editor, setEditor] = useState('');
    const [content, setContent] = useState('');

    return <Container component="main">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Article manager app
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          value={title} 
          onChange={evt => setTitle(evt.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="editor"
          label="Editor"
          name="editor"
          autoComplete="editor"
          value={editor} 
          onChange={evt => setEditor(evt.target.value)}
        />
        <TextareaAutosize 
        className={classes.textArea} 
        aria-label="minimum height" 
        rowsMin={5} 
        placeholder="Content" 
        value={content} 
        onChange={evt => setContent(evt.target.value)}/>
        
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={action => {
            addArticle(title, editor, content)
          }}
        >
          add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cancel}
          onClick={action => {
            setTitle('')
            setEditor('')
            setContent('')
          }}
        >
          cancel
        </Button>
      </form>
      <h1>Published article list</h1>
      <ArticleListComp></ArticleListComp>
    </div>
  </Container>
}

export default MainContent