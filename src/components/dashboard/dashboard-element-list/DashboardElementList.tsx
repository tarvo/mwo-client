import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function DashboardElementList({elements}) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        {elements.map((w) => (
          <Paper elevation={8} sx={{ml: 1, mr: 0, mt: 1, pl: 1, pr: 1}} key={w.id}>
            <Grid item xs={12} sm container>

              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {w.id}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body2">
                    {w.userName}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>

                <Grid item>
                  <Typography sx={{color: 'text.secondary'}} variant="subtitle1" component="div">
                    {w.deadlineDate.toDateString()}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography sx={{color: 'text.secondary'}} variant="body2">
                    {w.status}
                  </Typography>
                </Grid>

              </Grid>

            </Grid>
          </Paper>
        ))}
      </Grid>
    </>
  );
}
