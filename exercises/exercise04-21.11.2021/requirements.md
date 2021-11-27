Задача 1:
---------------------------------------------------------------------------------------
	Условие:
		Даден е следния код:

		var person = {
			_salary: 1000,
			getSecretSalaryInfo: function (){
				return this._salary;
			}
		};

		var stoleSalaryInfo = person.getSecretSalaryInfo;

		console.log(person.getSecretSalaryInfo()); //принтира 1000
		console.log(stoleSalaryInfo()); //принтира undefined

		Поправете кода така, че и двете console.log да принтират числото 1000.

=======================================================================================
Задача 2:
---------------------------------------------------------------------------------------
	Условие:
		Създайте клас Person с две свойства:
			1) "name" - различно за всяка инстанция
			2) "planet" = "Земя" - общо за всяка инстанция
		Конструкторът да приема само един параметър - "Name"

		Добавете функция, която принтрира "Здравей [Чък Норис] от планетата [Земя]"
		Направете три инстанции на обекта и извикайте функцията.

=======================================================================================
Задача 3:
---------------------------------------------------------------------------------------
	Условие:
		Да се създаде клас Item с две свойства - име и отстъпка (в проценти).
		Нека основната цена е 1000 и тя се връща от метод на прототипа.
		Създайте метод на инстанцията, който изчислява цената, базирано на основната цена,
		прилагайги към нея дадената отстъпка.

=======================================================================================
Задача 4:
---------------------------------------------------------------------------------------
	Условие:
		С помощта на closure и клас, направете задача 1, така че _sallary да е наистина
		private.
=======================================================================================
Задача 5
---------------------------------------------------------------------------------------
	Условие:
	Напишете три класа, които отговарят на следната UML диаграма:
		1.	PaymentMethod – клас, който трябва да има само един метод, който return-ва string: "Your amount in the account is: "
		2.	CashMethod – наследява PaymentMethod и има:
			a.	Наистина private property amount, което не може да бъде достъпвано директно от инстанцията.
			b.	Public method addToAmount, който добавя стойност към private property-то
			c.	Public method reduceFromAmount, който изважда стойност от private property-то
			d.	Public method getAmount, който извиква родителския getAmount и в края добавя стойността от private property-то към текущия стринг
		3.	CreditMethod – наследява PaymentMethod и има:
			a.	Наистина private property amount, което не може да бъде достъпвано директно от инстанцията.
			b.	Public method addToAmount, който добавя 90% от подадената стойност към private property-то
			c.	Public method reduceFromAmount, който изважда стойност от private property-то
			d.	Public method getAmount, който извиква родителския getAmount и в края добавя стойността от private property-то към текущия стринг

		Пример за използване на класовете:
		const cashAccount = new CashMethod();
		cashAccount.getAmount(); // returns “Your amount in the account is: 0”
		cashAccount.addToAmount(100); // returns cashAccount instance (useful for method chaining)
		cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10); // returns cashAccount instance (useful for method chaining)
		cashAccount.getAmount(); // returns “Your amount in the account is: 140”

		const creditAccount = new CreditMethod();
		creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
		creditAccount.getAmount(); // returns “Your amount in the account is: 90”;

		В публичния interface на класовете не е разрешено да има нищо друго освен описаните методи и всички наследени от Object.