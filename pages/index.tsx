import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Calculation } from '../components/calculation/Calculation';

const Home: NextPage = () => {
	return (
		<>
			<h3 className={styles.header}>FIRE калькулятор</h3>
			<div className={styles.container}>
				<div className={styles.mainContainer}>
					<div>
						Калькулятор для расчета возраста выхода на пенсию по американской
						системе FIRE. По этой системе необходимо накопить денег на 25 лет
						жизни по текущему уровню трат.
					</div>
					<Calculation />
				</div>
			</div>
		</>
	);
};

export default Home;
