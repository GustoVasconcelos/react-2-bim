import { getImageUrl } from "../../components/utils";

export default function Avatar({ person, size }) {
    return(
        <img 
        className="avatar p-2"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}