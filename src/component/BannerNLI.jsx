import Buttonelement from "./element/Buttonelement";
import '../css/bannernli.css'
export default function BannerNLI() {
    return (
        <section className="bannersec">
            <h1><span>Temukan Mitra</span> Anda<br/> untuk  <span>Kolaborasi</span><br/> Proyek</h1>
            <p>Perluas jaringan dan kreativitas anda dengan <br/>Berkolaborasi.</p>
            <Buttonelement fw={700} br={"10px"} arrow={"True"} content={"Cari Tahu Tentang Kami"}/>
            
        </section>
    );
}