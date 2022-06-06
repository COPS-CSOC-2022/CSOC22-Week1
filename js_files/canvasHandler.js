const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  
    const drawLine = (fromX, fromY, toX, toY) => {
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
    };
  
    const head = () => {
      context.beginPath();
      context.arc(70, 30, 10, 0, Math.PI * 2, true);
      context.stroke();
    };
    const body = () => {
      drawLine(70, 40, 70, 80);
    };
    const leftArm = () => {
      drawLine(70, 50, 50, 70);
    };
    const rightArm = () => {
      drawLine(70, 50, 90, 70);
    };
    const leftLeg = () => {
      drawLine(70, 80, 50, 110);
    };
    const rightLeg = () => {
      drawLine(70, 80, 90, 110);
    };
  
    const initialDrawing = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      drawLine(10, 130, 130, 130);
      drawLine(10, 10, 10, 131);
      drawLine(10, 10, 70, 10);
      drawLine(70, 10, 70, 20);
    };
  
    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
  
  };
  
  const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  
    if (level == "Medium") count += 1;
    else if (level == "Hard") count += 2;
  
    switch (count) {
      case 1:
        head();
        break;
      case 2:
        body();
        break;
      case 3:
        leftArm();
        break;
      case 4:
        rightArm();
        break;
      case 5:
        leftLeg();
        break;
      case 6:
        rightLeg();
        break;
      default:
        break;
    }
  };
  