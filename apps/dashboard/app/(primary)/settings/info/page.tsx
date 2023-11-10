'use client'
import { PanelHeader } from 'components';
import { useRouter } from 'next/navigation';


const AccountInfoPage = () => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.back()
  }

  return <div className="side-content">
    <div className="title-description" onClick={handleClick}>
      <PanelHeader
        mainSlot={<><div style={{ fontWeight: 'bold' }}>Account details</div><div><p style={{ fontSize: '.7em', color: 'grey' }}>@dev42</p></div></>}
        leftSlot={<i className="fas fa-arrow-left"></i>}
      />

      <div className="details">
        <p>
          Here you will see details about your information
        </p>
      </div>

    </div>
  </div>;
};

export default AccountInfoPage;
