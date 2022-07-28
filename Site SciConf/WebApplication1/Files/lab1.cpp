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
    {//�������� ���������� �����
        return ((volk && koza) || (volk && kapusta) || (koza && kapusta));
    };

    bool ProverkaEda()
    {//�������� "������� ����"
        return ((volk && koza) || (koza && kapusta));
    };

    bool ProverkaEnd()
    {//�������� ������� ���������������� �������� (��� ������� ������)
        return (volk && koza && kapusta);
    };

    void Cls()
    {//��� ������ ����������� ����� � ������� ������
        volk = false;
        koza = false;
        kapusta = false;
    };

    void All()
    {//��� ��������� ���������������� �������� �� ������ ������
        volk = true;
        koza = true;
        kapusta = true;
    };

    void Out()
    {
        if (volk) cout << "���� ";
        if (koza) cout << "���� ";
        if (kapusta) cout << "������� ";
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

Game bereg1; //������ �����
Game lodka; //�����
Game bereg2; //������ �����

CurrentPos pos;

void OutCurrentPos()
{
    cout<<"��� ��� ���������"<<endl;
    cout << "����� 1: ";
    bereg1.Out();
    cout << "�����: ";
    lodka.Out();
    cout << "����� 2: ";
    bereg2.Out();
    if (pos == cp_bereg1) cout << "��������� �����: 1 �����" << endl;
    else cout << "��������� �����: 2 �����" << endl;
};

void Start()
{
    bereg1.All();//��� �� ������ ������
    bereg2.Cls();//������ ����� ����
    lodka.Cls();//����� �����
    pos = cp_bereg1;//��������� ��������� "����� 1"
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
            cout << "�������� ��������:" << endl
                << "  1 - ����������� �����" << endl
                << "  2 - ����������� ����" << endl
                << "  3 - ����������� �������" << endl
                << "  0 - ����� �� ������ �����" << endl
                << "���� ��������: ";
            cin >> command;
            cout << endl;
            if (pos == cp_bereg1) bereg1.Deistvie(&lodka, (Object)command);
            else bereg2.Deistvie(&lodka, (Object)command);
        }
        while ((command != 0) && !bereg2.ProverkaEnd());

        if (command == 0)
        {
            if (lodka.ProverkaKolichestva()==true)
            {//����� �������
                cout << "����� �������, �������� ������" << endl << endl;
                Start();
            }
            else if (bereg1.ProverkaEda()==true)
            {//������ �����
                cout << "���� �� ������ 1 ������, �������� ������" << endl << endl;
                Start();
            }
            else if (bereg2.ProverkaEda()==true)
            {//������ �����
                cout << "���� �� ������ 2 ������, �������� ������" << endl << endl;
                Start();
            }
            else if (pos == cp_bereg1) pos = cp_bereg2;
            else pos = cp_bereg1;
        };
    }//������� ���������� �������: ��� ���� � �� ������ ������
    while ((pos != cp_bereg2) || !bereg2.ProverkaEnd());

    cout << "�����������, �� ��������!!!" << endl << endl;
};
