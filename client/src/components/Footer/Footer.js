import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// eslint-disable-next-line no-unused-vars
import Logo from "../../assets/images/logo.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// eslint-disable-next-line no-unused-vars
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Link } from "@material-ui/core";


const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.footer}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box>
                        <Link href="https://www.facebook.com/tunflix">
                            <FacebookIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                        <Link href="https://www.instagram.com/tunflix">
                            <InstagramIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                        <Link href="https://www.twitter.com/tunflix">
                            <TwitterIcon className={classes.socialIcon} fontSize="large" />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography >Faq</Typography>
                            <Typography component={Link} color='textSecondary' display="block" >Questions?</Typography>
                            <Typography component={Link} color='textSecondary' display="block" >Comment </Typography>
                            <Typography component={Link} color='textSecondary' display="block"  >complaints</Typography>
                            <Typography component={Link} color='textSecondary' display="block"  >Blog</Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography >Help centre</Typography>
                            <Typography component={Link} color='textSecondary' display="block" >contact</Typography>
                            <Typography component={Link} color='textSecondary' display="block" >Centre</Typography>
                            <Typography component={Link} color='textSecondary' display='block'>Preferences cookies</Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography >Account</Typography>
                            <Typography component={Link} color='textSecondary' display='block'>privacy</Typography>
                            <Typography component={Link} color='textSecondary' display='block'>developer</Typography>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    © 2022 Netflix, Inc.
                </Grid>
            </Grid>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(8),
    },
    socialIcon: {
        color: "grey",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
        transition: ".1s",
        marginRight: theme.spacing(1),
    },
}));

export default Footer;
