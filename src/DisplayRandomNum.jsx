function DisplayRandomNum() {

	 

  return (
  <>
  </>
  );
}

export default DisplayRandomNum;

/* 
function DisplayRandomNum() {
	const [randomNum, setRandomNum] = useState(0);
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setRandomNum(Math.floor(Math.random() * 100));
	  }, 1000);
  
	  return () => {
		clearInterval(intervalId);
	  };
	}, []);
  
	return <div>{randomNum}</div>;
  } */


/* 	function DisplayRandomNum() {
		function generateRandomNum() {
		  return Math.floor(Math.random() * 1000 + 1);
		}
		return (
		<>
		<h1>The random number is: {generateRandomNum()}</h1> can not declare functions here, loops, if statements. Can add classes, values, ternary operators 
		</>
		);
	  }
	  
	  export default DisplayRandomNum; */