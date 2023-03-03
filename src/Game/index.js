/* eslint-disable max-lines */
import './styles.scss';
import React, { useEffect, useState } from 'react';
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
  const background = 'https://public-bucket-kaizhidu.s3.us-west-2.amazonaws.com/background.jpeg';
  useEffect(() => {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  rgba(16, 16, 16, 0.8)),url(${background})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'cover';
  }, []);

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');

  const [createPlayer1, setCreatePlayer1] = useState('');
  const [createPlayer2, setCreatePlayer2] = useState('');
  const [createPlayer3, setCreatePlayer3] = useState('');
  const [createPlayer4, setCreatePlayer4] = useState('');

  const [data, setData] = useState([]);

  const countMethod = entity => {
    const { quantity, value } = entity || {};
    return (quantity || 0) * (value || 0);
  };

  const summary = data.reduce((accum, item) => {
    const { player1: p1, player2: p2, player3: p3, player4: p4 } = item || {};
    // eslint-disable-next-line no-param-reassign
    accum.player1.value = accum.player1.value + countMethod(p1);
    // eslint-disable-next-line no-param-reassign
    accum.player2.value = accum.player2.value + countMethod(p2);
    // eslint-disable-next-line no-param-reassign
    accum.player3.value = accum.player3.value + countMethod(p3);
    // eslint-disable-next-line no-param-reassign
    accum.player4.value = accum.player4.value + countMethod(p4);
    return accum;
  }, {
    id: 'summary',
    name: 'Total',
    player1: {
      value: 0
    },
    player2: {
      value: 0
    },
    player3: {
      value: 0
    },
    player4: {
      value: 0
    }
  });

  const dataWithTotal = (data || []).length ?
    [...data, summary]
    : data;

  const finalData = [...dataWithTotal, {
    id: 'create',
    name: 'New'
  }];

  const displayPlayer1 = player1 || 'Player1';
  const displayPlayer2 = player2 || 'Player2';
  const displayPlayer3 = player3 || 'Player3';
  const displayPlayer4 = player4 || 'Player4';

  const check1 = !createPlayer1 || parseInt(createPlayer1);
  const check2 = !createPlayer2 || parseInt(createPlayer2);
  const check3 = !createPlayer3 || parseInt(createPlayer3);
  const check4 = !createPlayer4 || parseInt(createPlayer4);

  let countInput = 0;
  if (createPlayer1) {
    countInput = countInput + 1;
  }
  if (createPlayer2) {
    countInput = countInput + 1;
  }
  if (createPlayer3) {
    countInput = countInput + 1;
  }
  if (createPlayer4) {
    countInput = countInput + 1;
  }
  const check = check1 && check2 && check3 && check4 && (countInput === 3);
  const getQuantity = number => {
    let value = 1;
    if (!number) {
      return 0;
    }
    if (number > 7) {
      value = 2;
    }
    if (number > 9) {
      value = 3;
    }
    return value;
  };

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
                      disabled={!check}
                      color="success"
                      onClick={() => {
                        const quantity1 = getQuantity(createPlayer1);
                        const quantity2 = getQuantity(createPlayer2);
                        const quantity3 = getQuantity(createPlayer3);
                        const quantity4 = getQuantity(createPlayer4);
                        const newData = [...data, {
                          id: data.length + 1,
                          name: data.length + 1,
                          player1: { value: createPlayer1, quantity: quantity1 },
                          player2: { value: createPlayer2, quantity: quantity2 },
                          player3: { value: createPlayer3, quantity: quantity3 },
                          player4: { value: createPlayer4, quantity: quantity4 }
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
                <StyledTableCell align="left"> {row.name === 'Total' ? 'Total' : (idx + 1)}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.player1.value} {(row.player1.quantity && row.player1.quantity !== 1)
                    ? ` X ${row.player1.quantity}` : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.player2.value} {(row.player2.quantity && row.player2.quantity !== 1)
                    ? ` X ${row.player2.quantity}` : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.player3.value} {(row.player3.quantity && row.player3.quantity !== 1)
                    ? ` X ${row.player3.quantity}` : ''}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.player4.value} {(row.player4.quantity && row.player4.quantity !== 1)
                    ? ` X ${row.player4.quantity}` : ''}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.name !== 'Total' &&
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
                  }

                  {row.name === 'Total' &&
                      <Button
                        onClick={() => {
                          setData([]);
                        }}
                        variant="contained"
                        color="primary"
                      >
                        reset
                      </Button>
                  }

                </StyledTableCell>
              </StyledTableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}
