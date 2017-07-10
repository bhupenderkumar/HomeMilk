package com.milk.RestController;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.milk.consumer.MilkConsumer;
import com.milk.daoImpl.MilkDaoImpl;

@Controller
@RestController
public class MilkController {
	private MilkDaoImpl milkDaoImpl = new MilkDaoImpl();
	@RequestMapping(value = "/getAllMilkConsumer", method = RequestMethod.GET)
	public List<MilkConsumer> getAllMilkConsumer() {
		List<MilkConsumer> milkConsumer = milkDaoImpl.getAllMilkConsumer();
		return milkConsumer;
		// return new ResponseEntity<List<MilkConsumer>>(milkConsumer,
		// HttpStatus.OK);
	}

	@RequestMapping(value = "/createMilkConsumer", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> createMilkConsumer(@RequestBody MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}

	@RequestMapping(value = "/updateMilkConsumer", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> updateMilkConsumer(MilkConsumer consumer) {
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}

	@RequestMapping(value = "/deleteMilkConsumer", method = RequestMethod.DELETE)
	public @ResponseBody ResponseEntity<Boolean> deleteMilkConsumer(MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}

	@RequestMapping(value = "/createMilkAttendance", method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<Boolean> createAttendance(MilkConsumer milkConsumer) {
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}

}
