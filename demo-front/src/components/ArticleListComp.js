import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ArticleController from '../controllers/ArticleController';
import IconButton from '@material-ui/core/IconButton';
import '../styles/App.css';

function deleteRow(id) {
    new ArticleController().delete(id)
}

class ArticleListComp extends Component {
    

    state={
        articles: []
    }

    


    listArticles = () => {
        return this.state.articles.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.content}</TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="right">
                    <IconButton variant="outlined">
                        <EditIcon/>
                    </IconButton>
                </TableCell>
                <TableCell align="right">
                    <IconButton variant="outlined" onClick= {e => {
                            deleteRow(row.id)
                        }
                        }>
                        <DeleteForeverIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        ))
    }

    render() {
        
        return (
            <React.Fragment>
                <TableContainer component={Paper}>
                    <Table className="tableClass" aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">title</TableCell>
                            <TableCell align="right">content</TableCell>
                            <TableCell align="right">editor</TableCell>
                            <TableCell align="right">modify</TableCell>
                            <TableCell align="right">delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.listArticles}
                        </TableBody>
                    </Table>
                </TableContainer>   
            </React.Fragment>
        )
    }

    componentDidMount() {
        console.log('component did mount : ' + this.state.articles);
        new ArticleController().fetchAll(this);
    }
}

export default ArticleListComp;