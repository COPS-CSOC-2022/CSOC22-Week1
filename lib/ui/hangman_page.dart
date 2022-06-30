import 'package:flutter/material.dart';

import 'package:hangman/engine/hangman.dart';

const List<String> progressImages = const [
  'data_repo/img/progress_0.png',
  'data_repo/img/progress_1.png',
  'data_repo/img/progress_2.png',
  'data_repo/img/progress_3.png',
  'data_repo/img/progress_4.png',
  'data_repo/img/progress_5.png',
  'data_repo/img/progress_6.png',
  'data_repo/img/progress_7.png',
];

const String victoryImage = 'data_repo/img/victory.png';

const List<String> alphabet = const [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const TextStyle activeWordStyle = TextStyle(
  fontSize: 30.0,
  letterSpacing: 5.0,
);
class HangmanPage extends StatefulWidget {
  final HangmanGame _engine;

  HangmanPage(this._engine);

  @override
  State<StatefulWidget> createState() => _HangmanPageState();
}

class _HangmanPageState extends State<HangmanPage> {

  bool _showPlayGame = true;
  bool _showNewGame;
  String _activeImage;
  String _activeWord;

  @override
  void _playGame() {
    widget._engine.newGame();

    this.setState(() {
      _activeWord = '';
      _activeImage = progressImages[0];
      _showPlayGame = false;
    });
  }
  void _showInstructions() {
    var _ins_text = 'Hangman is a simple word guessing game.\nPlayers try to figure out an unknown word by guessing letters.\nIf too many letters which do not appear in the word are guessed, the player loses.\n';
    showDialog(
      context: context,
      builder: (context) {
        return Dialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(40)),
          elevation: 16,
          child: Container(
            height: 400.0,
            width: 460.0,
            child: ListView(
              children: <Widget>[
                SizedBox(height: 40),
                Center(
                  child: Text(
                    _ins_text,
                    style: TextStyle(fontSize: 24, color: Colors.blue, fontWeight: FontWeight.bold,),
                    textAlign: TextAlign.center,
                  ),
                ),
                ElevatedButton(
                  child: Text('Main Menu',style: TextStyle(fontSize: 30),),
                    onPressed: () => Navigator.pop(context),
                      ),
              ],
            ),
          ),
        );
      },
    );
  }
  void initState() {
    super.initState();

    widget._engine.onChange.listen(this._updateWordDisplay);
    widget._engine.onWrong.listen(this._updateGallowsImage);
    widget._engine.onWin.listen(this._win);
    widget._engine.onLose.listen(this._gameOver);

    this._newGame();
  }

  void _updateWordDisplay(String word) {
    this.setState(() {
      _activeWord = word;
    });
  }

  void _updateGallowsImage(int wrongGuessCount) {
    this.setState(() {
      _activeImage = progressImages[wrongGuessCount];
    });
  }

  void _win([_]) {
    this.setState(() {
      _activeImage = victoryImage;
      this._gameOver();
    });
  }

  void _gameOver([_]) {
    this.setState(() {
      _showNewGame = true;
    });
  }

  void _newGame() {
    widget._engine.newGame();

    this.setState(() {
      _activeWord = '';
      _activeImage = progressImages[0];
      _showNewGame = false;
    });
  }

  Widget _renderBottomContent() {
    if (_showNewGame) {
      return new Container(
        child: Column(
            children: <Widget>[
       ElevatedButton(
        child: Text('New Game'),
        onPressed: this._newGame,
      ),
      ElevatedButton(
        child: Text('Instructions'),
        onPressed: this._showInstructions,
      ),
      ],
    ),
        );
    }
    else {
      final Set<String> lettersGuessed = widget._engine.lettersGuessed;

      return Wrap(
        spacing: 1.0,
        runSpacing: 1.0,
        alignment: WrapAlignment.center,
        children: alphabet.map((letter) =>
            MaterialButton(
              child: Text(letter),
              padding: EdgeInsets.all(2.0),
              onPressed: lettersGuessed.contains(letter) ? null : () {
                widget._engine.guessLetter(letter);
              },
            )).toList(),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_showPlayGame) {
      return new Container(
          child: Column(
          children: <Widget>[
            new Padding(
              padding: const EdgeInsets.symmetric(vertical: 160.0),
            ),
          ElevatedButton(
            child: Text('Play Game',style: TextStyle(fontSize: 30),),
            onPressed: this._playGame,
            ),
            new Padding(
              padding: const EdgeInsets.symmetric(vertical: 5.0),
            ),
            ElevatedButton(
            child: Text('Instructions',style: TextStyle(fontSize: 30),),
              onPressed: this._showInstructions,
            ),
    ],
          ),
      );
    }
    else {
      return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text('Hangman'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              // Image
              Expanded(
                child: Image.asset(_activeImage),
              ),
              // Word
              Padding(
                padding: EdgeInsets.all(2.0),
                child: Center(
                  child: Text(_activeWord, style: activeWordStyle),
                ),
              ),
              // Controls
              Expanded(
                child: Center(
                  child: this._renderBottomContent(),
                ),
              ),
            ],
          ),
        ),
      );
    }
  }
}
