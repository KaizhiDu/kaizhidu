/* eslint-disable max-lines */
import './styles.scss';
// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, TextField } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

export default function Game() {
  // const background = 'https://public-bucket-kaizhidu.s3.us-west-2.amazonaws.com/background.jpeg';
  // useEffect(() => {
  //   document.getElementsByTagName(
  //     'body'
  //     // eslint-disable-next-line max-len
  //   )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  // rgba(16, 16, 16, 0.8)),url(${background})`;
  //   document.getElementsByTagName(
  //     'body'
  //     // eslint-disable-next-line max-len
  //   )[0].style.backgroundSize = 'cover';
  // }, []);

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');

  const [createPlayer1, setCreatePlayer1] = useState('');
  const [createPlayer2, setCreatePlayer2] = useState('');
  const [createPlayer3, setCreatePlayer3] = useState('');
  const [createPlayer4, setCreatePlayer4] = useState('');

  const [data, setData] = useState([]);

  const finalData = [...data, {
    id: 'create',
    name: 'New'
  }];

  const displayPlayer1 = player1 || 'Player1';
  const displayPlayer2 = player2 || 'Player2';
  const displayPlayer3 = player3 || 'Player3';
  const displayPlayer4 = player4 || 'Player4';

  return (

    <div style={{
      marginTop: 80
    }}>

      <Container
        style={{
          padding: 30,
          marginBottom: 20
        }}
        component={Paper}>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={6} md={3}>
            <TextField
              style={{
                marginRight: 10,
                marginBottom: 10
              }}
              onChange={evt => setPlayer1(evt.target.value)}
              id="player1"
              label="Player 1 Name"
              variant="outlined"
              value={player1}
            />
          </Grid>
          <Grid xs={6} md={3}>
            <TextField
              style={{
                marginRight: 10,
                marginBottom: 10
              }}
              onChange={evt => setPlayer2(evt.target.value)}
              id="player2"
              label="Player 2 Name"
              variant="outlined"
              value={player2}
            />
          </Grid>
          <Grid xs={6} md={3}>
            <TextField
              style={{
                marginRight: 10,
                marginBottom: 10
              }}
              onChange={evt => setPlayer3(evt.target.value)}
              id="player3"
              label="Player 3 Name"
              variant="outlined"
              value={player3}
            />
          </Grid>
          <Grid xs={6} md={3}>
            <TextField
              style={{
                marginRight: 10,
                marginBottom: 10
              }}
              onChange={evt => setPlayer4(evt.target.value)}
              id="player4"
              label="Player 4 Name"
              variant="outlined"
              value={player4}
            />
          </Grid>
        </Grid>
      </Container>

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No.</StyledTableCell>
              <StyledTableCell align="left">{displayPlayer1}</StyledTableCell>
              <StyledTableCell align="left">{displayPlayer2}</StyledTableCell>
              <StyledTableCell align="left">{displayPlayer3}</StyledTableCell>
              <StyledTableCell align="left">{displayPlayer4}</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((row, idx) => {
              const { id } = row || {};
              if (id === 'create') {
                return <StyledTableRow key={row.id}>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      onChange={evt => setCreatePlayer1(evt.target.value)}
                      id="createPlayer1"
                      variant="standard"
                      value={createPlayer1}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      onChange={evt => setCreatePlayer2(evt.target.value)}
                      id="createPlayer2"
                      variant="standard"
                      value={createPlayer2}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      onChange={evt => setCreatePlayer3(evt.target.value)}
                      id="createPlayer3"
                      variant="standard"
                      value={createPlayer3}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      onChange={evt => setCreatePlayer4(evt.target.value)}
                      id="createPlayer4"
                      variant="standard"
                      value={createPlayer4}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => {
                        const newData = [...data, {
                          id: data.length + 1,
                          name: data.length + 1,
                          player1: createPlayer1,
                          player2: createPlayer2,
                          player3: createPlayer3,
                          player4: createPlayer4
                        }];
                        setData(newData);
                        setCreatePlayer1('');
                        setCreatePlayer2('');
                        setCreatePlayer3('');
                        setCreatePlayer4('');
                      }}
                    >
                      add
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>;
              }
              return <StyledTableRow key={id}>
                <StyledTableCell align="left">{idx + 1}</StyledTableCell>
                <StyledTableCell align="left">{row.player1}</StyledTableCell>
                <StyledTableCell align="left">{row.player2}</StyledTableCell>
                <StyledTableCell align="left">{row.player3}</StyledTableCell>
                <StyledTableCell align="left">{row.player4}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() => {
                      const afterDelete = (data || [])
                      // eslint-disable-next-line id-length
                        .filter((_, idx2) => idx2 !== idx);
                      setData(afterDelete);
                    }}
                    variant="contained"
                    color="error"
                  >
                    delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}
