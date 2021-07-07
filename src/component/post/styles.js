import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    medias: {
        height: ' auto',

        padding: '56.25%',
        background: 'rgba(0, 0,0,05)',
        backgroundColor: 'darken'

    },

    border: {
        border: 'solid'
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: "100%",
        position: 'relative',
        margin: '20px',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
    },
    overlay: {
        position: 'relative',
        left: '15px'


    },



    title: {
        padding: '0 16px',

    },
    cardActions: {
        padding: '0  16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between'
    },

}))