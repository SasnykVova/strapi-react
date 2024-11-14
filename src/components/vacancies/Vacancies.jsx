import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import style from './Vacancies.module.css';
import { useNavigate } from 'react-router-dom';


const Vacancies = () => {

    const [vacancies, setVacancies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:1337/api/vacancies?populate=*')
            .then(response => {
                setVacancies(response.data.data);
                console.log(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError('Помилка завантаження даних!');
                setIsLoading(false);
            });
    }, []);

    const hadleClickVacancy = (id) => {
        navigate(`/vacancies/${id}?populate=*`);
    }

    return (
        <div className={style.vacancies}>
            <h2 className='title-h2'>Vacancies</h2>
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            <div className={style.vacanciesWrapper}>
                {!isLoading && !error && vacancies.length > 0 ?
                    vacancies.map(vacancy => (
                        <div className={style.vacancy} key={vacancy.id} onClick={() => hadleClickVacancy(vacancy.documentId)}>
                            <h2 className={style.title}>{vacancy.title}</h2>
                            <p className={style.descriptions}>{vacancy.descriptions}</p>
                            <div className={style.salary}>{vacancy.salary}$</div>
                        </div>))
                    :
                    ''
                }
            </div>
        </div>
    );
}




export default Vacancies;
