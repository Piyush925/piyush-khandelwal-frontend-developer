import Card from 'react-bootstrap/Card';

const CardInfo = ({ capsule, showCapsuleDetails }) => {
  return (
    <Card className='mb-2 w-72'>
      <Card.Body>
        <Card.Title>
          <button onClick={() => showCapsuleDetails(capsule.id)} class="text-blue-500 background-transparent font-bold uppercase text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
          >
            <span className='text-xl'>{capsule?.serial}</span>
          </button></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{capsule?.status}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{capsule?.type}</Card.Subtitle>
        <Card.Text>
          {capsule.last_update}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardInfo;