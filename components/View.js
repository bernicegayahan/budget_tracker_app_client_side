import Container  from 'react-bootstrap/Container';
//lets learn about using "HEAD" component
import Head from 'next/head'

//what will be the purpose of this page?
//our end goal when rendering components is that we want them to be have uniformity (spacing, margin, etc)


//lets declare a function that will describe the structure of this component.
//lets pass a property for our view component.
const View = ({title, children}) => {
	return(
		<>
		  <Head>
		  	<title key="title-tag"> {title}</title>
		  	<meta key="title-meta" name="viewport" content="initial-scale=1.0, width=device-width"/>
		  </Head>
		  <Container className="mt-5 pt-4 mb-5">
		     {children}
		  </Container>
		</>
	)
}
export default View; 