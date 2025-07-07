#include "crow_all.h"
#include <mysql/mysql.h>
// ... Bağlantı ve ekleme kodları ...
int main() {
    crow::SimpleApp app;
    CROW_ROUTE(app, "/add_person").methods("POST"_method)
    ([](const crow::request& req){
        auto x = crow::json::load(req.body);
        // MySQL bağlantısı ve ekleme kodu
        return crow::response(200, "Kayıt eklendi!");
    });
    CROW_ROUTE(app, "/list_persons")([](){
        // MySQL bağlantısı ve listeleme kodu
        return crow::response("[]");
    });
    app.port(18080).run();
} 