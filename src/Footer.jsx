function Footer() {
  const strA = "안녕";
  const strB = "리액트";
  const boolA = "트루";
  const boolB = false;
  const objA = {
    a: 1,
    b: 2,
  };
  return (
    <footer>
      <h1>꼬리말</h1>
      <p>{strA + strB}</p>
      <h2>{boolA || boolB}</h2>
      {/* <h3>{objA}</h3> */}
      <h3>{objA.a}</h3>
      <h3>{objA.b}</h3>
    </footer>
  );
}

export default Footer;
