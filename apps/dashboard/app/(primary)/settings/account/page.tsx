import "./account.scss";
import Link from "next/link";
import { PanelHeader } from "components";


const AccountPage = () => {
  return <div className="side-content">
    <div className="title-description">
      <PanelHeader
        mainSlot={<><div style={{ fontWeight: 'bold' }}>Your Account</div><div><p style={{ fontSize: '.7em', color: 'grey' }}>@loquito123</p></div></>}
        leftSlot={<i className="fas fa-arrow-left"></i>}
      // rightSlot={<i className="fas fa-cog"></i>}
      />
      <div className="details">
        <p>
          See information about your account, download an archive of your data, or learn about your account deactivation options
        </p>
      </div>

    </div>
    <div className="tabs2">
     
      <Link href="/settings/info">
        <PanelHeader
          className='padding-xs'
          leftSlot={<i className="fas fa-user"></i>}
          rightSlot={<i className="fas fa-solid fa-angle-right"></i>}
          mainSlot={<><div className="tab-description-title">
            Account Information
          </div>
          <div className="tab-description-text">
            See your account infaormation like your phone number and email address.
          </div></>}
        />

      </Link>

    </div>
  </div>;
};

export default AccountPage;
