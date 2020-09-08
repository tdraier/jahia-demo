import { makeStyles } from '@material-ui/core/styles';


export const footerStyle = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0),
    },
}));

export const mainStyle = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(8),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(8),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    submit: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3)
    },
    cancel: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3)
    },
    form: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    textArea: {
      width: '100%'
    }
}));

export const menuStyle = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
      backgroundColor: 'blue'
    },
    iconClass: {
      color: 'white'
    }
}));