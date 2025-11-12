import { BtnVoltarAtv03 } from "../../components/BtnVoltar";
import Avatar from "./Avatar";


function Card({ children}) {
    return(
        <div className="card mt-3">
            {children}
        </div>
    );
}

export default function Atividade15() {
    return(
        <>
            <Card>
                <Avatar
                size={200}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
            </Card>
            <BtnVoltarAtv03 />
        </>
    );
}