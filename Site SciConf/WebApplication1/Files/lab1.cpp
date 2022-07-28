#include <iostream>
using namespace std;
enum CurrentPos
{
    cp_bereg1, cp_bereg2
};
enum Object
{
    o_volk = 1, o_koza = 2, o_kapusta = 3
};
class Game
{
public:
    bool volk;
    bool koza;
    bool kapusta;

    bool ProverkaKolichestva()
    {//проверка перегрузки лодки
        return ((volk && koza) || (volk && kapusta) || (koza && kapusta));
    };

    bool ProverkaEda()
    {//проверка "пищевая цепь"
        return ((volk && koza) || (koza && kapusta));
    };

    bool ProverkaEnd()
    {//проверка наличия транспортируемых объектов (для второго берега)
        return (volk && koza && kapusta);
    };

    void Cls()
    {//для сброса содержимого лодки и второго берега
        volk = false;
        koza = false;
        kapusta = false;
    };

    void All()
    {//для установки транспортируемых объектов на первом берегу
        volk = true;
        koza = true;
        kapusta = true;
    };

    void Out()
    {
        if (volk) cout << "Волк ";
        if (koza) cout << "Коза ";
        if (kapusta) cout << "Капуста ";
        cout << endl;
    };

    void Deistvie(Game* lmesto, Object lobject)
    {
        bool ltemp;
        switch (lobject)
        {
        case o_volk:
            ltemp = this->volk;
            this->volk = lmesto->volk;
            lmesto->volk = ltemp;
            break;
        case o_koza:
            ltemp = this->koza;
            this->koza = lmesto->koza;
            lmesto->koza = ltemp;
            break;
        case o_kapusta:
            ltemp = this->kapusta;
            this->kapusta = lmesto->kapusta;
            lmesto->kapusta = ltemp;
            break;
        };
    };
};

Game bereg1; //первый берег
Game lodka; //лодка
Game bereg2; //второй берег

CurrentPos pos;

void OutCurrentPos()
{
    cout<<"Что где находится"<<endl;
    cout << "Берег 1: ";
    bereg1.Out();
    cout << "Лодка: ";
    lodka.Out();
    cout << "Берег 2: ";
    bereg2.Out();
    if (pos == cp_bereg1) cout << "Положение лодки: 1 берег" << endl;
    else cout << "Положение лодки: 2 берег" << endl;
};

void Start()
{
    bereg1.All();//все на первом берегу
    bereg2.Cls();//второй берег пуст
    lodka.Cls();//лодка пуста
    pos = cp_bereg1;//начальное положение "берег 1"
};

int main()
{
    setlocale(LC_ALL,"Rus");
    Start();

    int command;

    do
    {
        do
        {
            OutCurrentPos();
            cout << "Выберите действие:" << endl
                << "  1 - Переместить волка" << endl
                << "  2 - Переместить козу" << endl
                << "  3 - Переместить капусту" << endl
                << "  0 - Плыть на другой берег" << endl
                << "Ваше действие: ";
            cin >> command;
            cout << endl;
            if (pos == cp_bereg1) bereg1.Deistvie(&lodka, (Object)command);
            else bereg2.Deistvie(&lodka, (Object)command);
        }
        while ((command != 0) && !bereg2.ProverkaEnd());

        if (command == 0)
        {
            if (lodka.ProverkaKolichestva()==true)
            {//лодка утонула
                cout << "Лодка утонула, начинаем заново" << endl << endl;
                Start();
            }
            else if (bereg1.ProverkaEda()==true)
            {//утрата груза
                cout << "Груз на берегу 1 утерян, начинаем заново" << endl << endl;
                Start();
            }
            else if (bereg2.ProverkaEda()==true)
            {//утрата груза
                cout << "Груз на берегу 2 утерян, начинаем заново" << endl << endl;
                Start();
            }
            else if (pos == cp_bereg1) pos = cp_bereg2;
            else pos = cp_bereg1;
        };
    }//условие выполнения задания: все целы и на втором берегу
    while ((pos != cp_bereg2) || !bereg2.ProverkaEnd());

    cout << "Поздравляем, вы выиграли!!!" << endl << endl;
};
