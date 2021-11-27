import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import setFormKey from "../actions/setFormKey.action";
import setPlan from "../actions/setPlan.action";
import { State } from "..";
import { History } from "history";
import { Server } from "../../../api/src/models/Server";
import getServer from "../http/getServer.http";
import { useNavigate, useParams } from "react-router-dom";

const ConfigureServer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const serverId = params.serverId!;
  const [server, setServer] = useState<Server>();

  useEffect(() => {
    const initialize = async () => {
      const serverFromApi = await getServer({
        serverId,
      });
      setServer(serverFromApi);
    };

    initialize();

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  if (!server) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Hostname</label>
            <input
              className="form-control"
              value="funserver.firestonehosting.com"
              readOnly={true}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              value={`:${server.port}`}
              readOnly={true}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label>Max players</label>
              <input
                className="form-control"
                // defaultValue={configuration.maxPlayers}
              />
            </div>

            <div className="form-group">
              <label>Message of the day</label>
              <input
                className="form-control"
                // defaultValue={configuration.motd}
              />
            </div>

            <div className="form-group">
              <label>Difficulty</label>
              <select className="form-control">
                <option>Easy</option>
                <option>Hard</option>
                <option>Brutual</option>
              </select>
            </div>
            <button
              onClick={() => {
                navigate("/purchase/payment-details");
              }}
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfigureServer;
