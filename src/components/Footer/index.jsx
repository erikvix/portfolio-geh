import SectionHeader from "../SectionHeader";
import Linkedin from "../svgs/linkedin";
import Whatsapp from "../svgs/whatsapp";
import Instagram from "../svgs/instagram";
import Email from "../svgs/email";

const index = () => {
  return (
    <footer className='bg-grayc bg-sobre pb-10 md:px-10'>
      <SectionHeader className='m-0 p-10 mt-20' subTitle='' title='entre em contato comigo!' desc=''/>
      <div className='flex flex-col md:flex-row md:justify-center md:items-center gap-10 font-light'>
        <a className="flex ml-5 md:ml-0 md:justify-center items-center gap-2" href="https://wa.me/5519993636481" target="_blank" rel="noopener noreferrer"><Whatsapp/>(19) 993636481</a>
        <a className="flex ml-5 md:ml-0 md:justify-center items-center gap-2" href="https://www.instagram.com/gegeh_cami/" target="_blank" rel="noopener noreferrer"><Instagram/>gegeh_cami</a>
        <a className="flex ml-5 md:ml-0 md:justify-center items-center gap-2" href="https://www.linkedin.com/in/geovana-camile-3516231b5/" target="_blank" rel="noopener noreferrer"><Linkedin/>Geovana Camile</a>
        <a className="flex ml-5 md:ml-0  md:justify-center items-center gap-2" href="mailto:geovanacamile.arte@gmail.com"><Email/>geovanacamile.arte@gmail.com</a>
   
      </div>
    </footer>
  )
}

export default index
